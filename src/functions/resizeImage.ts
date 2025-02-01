export const resizeAndCropImage = (file: File, targetWidth: number, targetHeight: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const objectURL = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const offsetX = (img.width - targetWidth) / 2;
      const offsetY = (img.height - targetHeight) / 2;

      ctx?.drawImage(
        img,
        offsetX, offsetY, targetWidth, targetHeight,
        0, 0, targetWidth, targetHeight
      );

      const croppedImage = canvas.toDataURL("image/png");  // A imagem cortada em base64
      resolve(croppedImage); // Resolva a promise com o resultado
      URL.revokeObjectURL(objectURL);
    };

    img.onerror = (error) => reject(error); // Em caso de erro ao carregar a imagem
    img.src = objectURL;
  });
};
