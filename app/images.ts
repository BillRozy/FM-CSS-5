const imageMap = import.meta.glob("./assets/**", {
  eager: true,
  import: "default"
});

export default imageMap;