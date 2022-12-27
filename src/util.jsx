export const appendStyles = (...styles) => [...styles].join(" ");
export const isEven = (num) => num % 2 === 0;
export const imageWithTheme = (images, isDark) =>
  images.map((image) => {
    return { img: image, isDark: isDark.includes(image) };
  });
