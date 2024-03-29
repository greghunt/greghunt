---
title: How to Create an Animated Spinner in Tailwind
description: Learn how to create an animated spinner in Tailwind CSS! Make your loading screens pop with this stylish and functional element.
---

Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to create a wide range of UI elements. In this article, we will learn how to create an animated spinner in Tailwind CSS.

A spinner is a graphical representation of a loading process. It is a useful element to provide feedback to users that the system is working in the background. Creating a spinner in Tailwind CSS is straightforward, thanks to its extensive list of utility classes.

Let's get started!

Step 1: Create a Container

The first step is to create a container for the spinner. We will use a div element with a class of flex justify-center items-center h-screen to center the spinner vertically and horizontally in the middle of the screen.

```html
<div class="flex h-screen items-center justify-center">
  <!-- Spinner goes here -->
</div>
```

Step 2: Add the Spinner

Now, let's add the spinner. We will use a div element with a class of border-4 rounded-full animate-spin to create a circular spinner with a border of 4 pixels and a rounded shape. The animate-spin class will animate the spinner continuously.

```html
<div class="flex h-screen items-center justify-center">
  <div class="animate-spin rounded-full border-4"></div>
</div>
```

Step 3: Customize the Spinner

Tailwind CSS provides several customization options to change the size, color, and animation of the spinner. Here are some examples:

Change the Size:

To change the size of the spinner, we can use the w- and h- classes to set the width and height of the spinner. For example, to create a smaller spinner with a width and height of 10 pixels, we can add the classes w-10 h-10 to the spinner element.

```html
<div class="flex h-screen items-center justify-center">
  <div class="h-10 w-10 animate-spin rounded-full border-4"></div>
</div>
```

Change the Color:

To change the color of the spinner, we can use the border- and border-opacity- classes to set the border color and opacity of the spinner. For example, to create a spinner with a blue border and a 50% opacity, we can add the classes border-blue-500 border-opacity-50 to the spinner element.

```html
<div class="flex h-screen items-center justify-center">
  <div
    class="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-opacity-50"
  ></div>
</div>
```

Change the Animation:

To change the animation of the spinner, we can use the animate- classes to set different animations. For example, to create a spinner that fades in and out, we can add the classes animate-pulse to the spinner element.

```html
<div class="flex h-screen items-center justify-center">
  <div
    class="h-10 w-10 animate-pulse rounded-full border-4 border-blue-500 border-opacity-50"
  ></div>
</div>
```

Step 4: Final Thoughts

Creating an animated spinner in Tailwind CSS is easy and straightforward. With Tailwind CSS's extensive list of utility classes, we can customize the spinner's size, color, and animation easily.

Remember that a spinner is a useful element to provide feedback to users that the system is working in the background. Use it wisely and try to keep it simple and straightforward.

Happy coding!

```html
<div class="relative h-12 w-12">
  <div
    class="from-brand-dark via-brand-dark absolute inset-0 block h-full w-full animate-spin rounded-full bg-gradient-to-br to-yellow-400 p-1"
  ></div>
  <div
    class="bg-brand-dark absolute inset-1 flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold"
  >
    1
  </div>
</div>
```
