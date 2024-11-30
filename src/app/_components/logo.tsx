import Image from 'next/image';

const Logo = () => {
    return (
        <div>
            <Image
                src="/assets/images/logo/thegonogo.png"
                alt="Logo"
                width={120}
                height={60}
            />
        </div>
    );
};

export default Logo;