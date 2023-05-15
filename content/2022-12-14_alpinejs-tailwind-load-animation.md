---
title: How to Animate on Load an Element with Tailwind CSS and Alpine JS
description: How to animate an element on load with Tailwind CSS and Alpine JS. This is a simple technique that can be used to animate any element on load.
---

You can use Alpine.js and Tailwind CSS to animate an element to slide into place on page load by using the x-transition directive and the transition utility classes provided by Tailwind.

First, you'll need to add the x-transition directive to the element you want to animate and set the duration of the transition:

```html
<div x-data="{ show: false }" x-transition:enter="transition duration-700" x-transition:enter-start="opacity-0 -translate-y-4" x-transition:enter-end="opacity-100 translate-y-0" 
     class="bg-white rounded p-4"
     x-show="show"
>
   //...content
</div>
```

Here, x-transition:enter is used to define the transition that will occur when the element enters the view, x-transition:enter-start is used to define the initial state of the element before the transition starts and x-transition:enter-end is used to define the final state of the element after the transition ends.

Then, you can use the transition utility classes provided by Tailwind to set the duration, easing and other properties of the transition. In this example, we are using duration-700 to set the duration of the transition to 700ms.

Next, set the property show to true on x-init function to show the element.

```js
<script>
  function() {
    this.show = true;
  }
</script>
```

Finally, add the necessary classes to position the element off the screen before it enters, in this example we are using opacity-0 -translate-y-4 to set the element's initial opacity to 0 and translate it up 4 units. Then, when the transition starts, the element will slide down and increase in opacity to become fully visible.

Note: x-transition directive is available from Alpine.js v2.x.x, if you are using the older version of alpine.js then you may use x-animate directive instead of x-transition.