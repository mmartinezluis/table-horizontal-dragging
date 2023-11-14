function yieldFeature() {
  const outerBox = $("<div style='min-width=500px; min-heigth=500px;'></div>");
  const draggingBox = $("<div></div>");
  outerBox.css(outerBoxConfig.styles);
  draggingBox.css(draggingBoxConfig.styles);

  draggingBox.on("mousedown", draggingBoxConfig.dragCallback);

  outerBox.append(draggingBox);
  return outerBox;
}

const outerBoxConfig = {
  styles: {
    border: "solid blue 2px",
  },
};

const draggingBoxConfig = {
  styles: {},
  dragCallback: function (e) {
    console.log("hello");
  },
};
