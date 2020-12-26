
interface IAvatarProps {
    value: string;
    size?: number;
    className?: string;
}

const Currency = ({ value, size = 32, className }: IAvatarProps) => {
    function generateCode(value: string) {
        if (value) {
            const names = value.split(/([0-9 ])+/g);
            const initials = names
                .filter(n => n !== " ")
                .map(n => n.substring(0, 1).toUpperCase());

            return initials ? initials.slice(0, 3).join("") : value.slice(0, 2);
        }
    }

    return (
        <div className={className}>
            <div className={`avatar avatar-${size} bg-secondary text-white rounded-circle`}>
                {generateCode(value)}
            </div>
        </div>
    )
}
export default Currency;
