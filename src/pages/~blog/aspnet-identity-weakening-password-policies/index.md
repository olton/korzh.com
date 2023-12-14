---
layout: "../../../layouts/BlogPostLayout.astro"
title: ASP.NET Identity - Weakening password policies
date: 2018-02-10
author: 
image: {
    src: "/images/password-weak.jpg",
    alt: "Image alternate text"
}
description: This is the second article in a series of articles about ASP.NET Core Identity.
draft: false
category: ASP.NET
tags: ["ASP-NET-CORE", "ASP-NET-IDENTITY", "PASSWORD"]
time: 2 min
---

> This is the second article in a series of articles about ASP.NET Core Identity.
> You can find the first one [here](/blog/aspnet-identity-store-user-data-in-claims).

## Problem
Let's suppose you created a new ASP.NET Core with the default Authentication (like in [previous article](/blog/aspnet-identity-store-user-data-in-claims)).
Then you run it and try to register a new user. On the registration form, we need to enter a password.
Since we need to register a user for testing purposes first of all - we don't want to make the password too complicated. We'd prefer to keep it simple and easy-to-remember (in the end - it's not a production-mode system!)

However, if you try to enter something simple like "qwerty" or your name - you will get the following bunch of error messages:
* Passwords must have at least one non-alphanumeric character.
* Passwords must have at least one digit ('0'-'9').
* Passwords must have at least one uppercase ('A'-'Z').

The reason for all these validation errors is that by default ASP.NET Core Identity has very strong password policies for the users. In the error messages above you can see the constraints which must be satisfied.

## Solution
The good news is that you can change these policies very easily, right in `Configure` method of your `Startup` class.

All you need to do is to use another version of `AddIdentity` method which accepts a lambda expression with `IdentityOptions` parameter.
So the following default code that initializes the Identity:

```csharp
services.AddIdentity<ApplicationUser, IdentityRole>()
	.AddEntityFrameworkStores<ApplicationDbContext>()
	.AddDefaultTokenProviders();
```

should be changed to the something like the following:

```csharp
services.AddIdentity<ApplicationUser, IdentityRole>(options => {
	options.Password.RequiredLength = 3;
	options.Password.RequiredUniqueChars = 0;
	options.Password.RequireLowercase = false;
	options.Password.RequireUppercase = false;
	options.Password.RequireDigit = false;
	options.Password.RequireNonAlphanumeric = false;
})
.AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders();
```
The options above are self-descriptive, so no additional explanations are required.

Of course, it's not good to leave such kind of password strength policies in production mode. That's why it will be a good idea to turn all those options off only in Development mode.

So, to make it possible we will need to add two more modifications to our `Startup` class:

```csharp
public IHostingEnvironment Environment { get; }

public Startup(IConfiguration configuration, IHostingEnvironment env)
{
    Configuration = configuration;
    Environment = env;
}

public void ConfigureServices(IServiceCollection services)
{
    .     .     .     .     .     .     .
    services.AddIdentity<ApplicationUser, IdentityRole>(options => {
        if (Environment.IsDevelopment()) {
            options.Password.RequiredLength = 3;
            options.Password.RequiredUniqueChars = 0;
            options.Password.RequireLowercase = false;
            options.Password.RequireUppercase = false;
            options.Password.RequireDigit = false;
            options.Password.RequireNonAlphanumeric = false;
        }
    })
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();
   .     .     .     .     .     .     .
}
```
