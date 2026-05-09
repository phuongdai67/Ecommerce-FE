import './CategorySlot.css';

const slots = [
    { label: 'Nấu ăn' },
    { label: 'Pha chế' },
    { label: 'Làm sạch' },
    { label: 'Bảo quản' },
    { label: 'Khác' },
];

const CategorySlot = () => {
    return (
        <div className="category-slot-wrapper">
            {slots.map((slot) => (
                <div key={slot.label} className="category-slot">
                    <div className="slot-circle" />
                    <span className="slot-label">{slot.label}</span>
                </div>
            ))}
        </div>
    );
};

export default CategorySlot;