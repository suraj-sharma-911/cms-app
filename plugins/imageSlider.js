export const imageSliderPlugin = {
    id: "imageSlider",
    init: (cms) => {
        cms.registerBlock("imageSlider", ImageSliderComponent);
    },
};
