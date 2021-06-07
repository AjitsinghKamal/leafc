function ImageLoader({
	src,
	width,
	height,
	quality = 80,
}: {
	src: string;
	width: number;
	quality?: number;
	height?: number;
}) {
	return `https://ik.imagekit.io/9hay5ichoyef/leaf/${src}?tr=w-${width},q-${quality},h-${
		height || width
	}`;
}

export default ImageLoader;
