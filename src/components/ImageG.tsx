import Image, { ImageProps } from 'next/image';

interface GImageProps extends ImageProps {
    src: string;
}

const ImageG: React.FC<GImageProps> = ({ src, ...props }) => {
    return (
        <Image
            src={src}
            {...props}
        />
    );
};

export default ImageG;