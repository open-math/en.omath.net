JSX treats new line after text with tag on new line as "nothing", loosing needed space.

Source:

```
Hello\n
<B>World</B>
```

On site:

```
Hello**World**
```

To fix this you first need to find such problematic places.
Use this find regexp: `(\w)\n\s*(<[B|M])`.
Replace value: `$1 $2`.

**Keep in mind that sometimes there is really no need to have space between text and tags!**
