import png from '/img.png'
import Svg from '@/assets/svg/atom.svg?react'

export const Asset = () => {
    return (
        <div>
            <img src={png} alt="png" />
            <Svg width={32} height={32} style={{ color: 'red' }} />
        </div>
    );
};

export default Asset;