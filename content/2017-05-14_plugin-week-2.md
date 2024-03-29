---
title: 'Plugin of the Week: No Format Shortcode'
description:
  "This week's plugin is clearly biased considering it's our own. We had a flexible solution to a common problem with formatting in WordPress, and so we shared it with others."
---
<a href="https://wordpress.org/plugins/no-format-shortcode/">
  Download
</a>

<img
  src="https://img.ghunt.io/no-format-shortcode.png?fm=webp&width=1000"
  alt="WordPress No format Shortcode"
/>

**We made this plugin from necessity.** Oftentimes when we're formatting a particularly intricate page in WordPress's editor, its automatic formatting, specifically the `wpautop` filter, would get in the way with our own HTML. The usual workaround for this is to simply disable `wpautop`:

```
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );
```

However, this is a global change. It's often the case that most pages are authored by the client and we do in fact want to keep it enabled for them to make things more convenient.

This is where the need to selectively disable `wpautop` came in. A nice simple solution here is to just wrap your content in a shortcode. Like this:

```
[noformat]
<ul>
  <li>This content won't be
    formatted.
</ul>

You'll notice no automatic <p>'s or <br/>'s are added within this shortcode.
[/noformat]
```

For awhile this was actually our own snippet we would drop into a theme or mu-plugins for a client. Then we realized after a quick search on the WP plugins repo that there wasn't much in the way of a solution like this. It could be really valuable for other WordPress developers in need of finer control over formatting. So in the spirit of WordPress and open-source, we published it this week for all to use.

Enjoy!
