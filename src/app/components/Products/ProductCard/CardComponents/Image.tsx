import { AppProps } from '@/app/PropData';

export const ProductImage = ({ image }: AppProps) => (
  <div
    style={{
      width: '100%',
      height: '150px',
      backgroundImage: `url(${image})`,
      objectFit: 'contain',
    }}
  />
);
