---
title: Tailwind for WordPress
date: 2022-06-01T19:59:06+00:00
layout: "@layouts/Post.astro"
description: Tailwind CSS is the perfect companion to WordPress block development. However it''s been a struggle to integrate Tailwind for WordPress. Until now!
keyword: tailwind for wordpress
heroImage: https://img.ghunt.io/tailwind-wordpress.png
tags:
    - css
    - plugins
    - styling
    - tailwind
---

[Tailwind CSS is a great development tool](/posts/component-development-and-taillwind-css/) if you aren’t already familiar with it. If we’re developing any site outside of WordPress, we almost always use it as our styling framework. This is because it:

- Is incredibly fast to write styles
- Lends itself well to abstracting your classes into components
- Leads to a very small amount of CSS in your final page which helps a lot with your [web page vitals](https://web.dev/vitals/).

However, it’s been a struggle for us to include it in our WordPress developer workflow. The main hurdle is that ***Tailwind CSS must be compiled***. Read more about their great [JIT mode for building your class styles](https://v2.tailwindcss.com/docs/just-in-time-mode).

In complex projects that need a build process, we use the [Sage theme](https://roots.io/sage/). This has a well configured build chain that allows us to integrate Tailwind CSS into our theme’s styles. Problem solved, right? Not really.

There are two issues with integrating Tailwind into WordPress:

1. Oftentimes you may write classes in your WordPress content, so your build step will be unaware of these classes since it’s not in your source code.
2. Even if you can get your classes into your source code somehow, you need to actually run your build step every time those classes update. However this requires Node.js which is not part of the standard WordPress hosting stack.

To address #1, we actually built a [CSS optimization plugin](https://wordpress.org/plugins/blaze-css/) that does this as a side effect, called Blaze CSS. This plugin simply logged all classes in your WordPress content and saved a text file that you could use to include when you built your Tailwind CSS. We used this in a few projects, but it was still a complication to have to rebuild our CSS every time classes changed and it was a bit convoluted.

At this point [Tailwind had come out with its own CDN](https://tailwindcss.com/docs/installation/play-cdn) that could build its CSS client side. It wasn’t meant for use in production because of the lag to generate the CSS but it worked very smoothly. This got be thinking of a much cleaner way to integrate Tailwind CSS into WordPress, and so [TailPress](https://wordpress.org/plugins/tailpress/) was born.

TailPress leverages the simplicity of the Tailwind CSS CDN and solves the performance caveat in WordPress by caching the generated CSS. It’s as simple as that but works wonderfully well. No build steps, no logging classes from WordPress, no performance issues, just activate the plugin and start using Tailwind CSS in your WordPress site.

This is especially well timed for us with block-based WordPress development. We want to avoid custom coding and direct theme work as much as possible with the new block site development. Ideally we stay in the block editor as long as possible to get something done. However, without Tailwind’s utility classes to fill the gap of native WordPress blocks, we need to stop and write custom CSS in our theme and enqueue it in the right places.

With TailPress, there’s no need to hop back and forth in our theme for custom styling. Simply add Tailwind classes to the *Advanced CSS class(es)* of any of your blocks and you can fine tune their styling directly in the editor.

Tailwind also comes with powerful responsive variants which allows us to style responsively. This is especially important at this point in time because the [WordPress block editor currently doesn’t have any responsive controls](https://github.com/WordPress/gutenberg/issues/13363) which is sorely needed.