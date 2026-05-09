import { useState } from "react";
import "./Dropdown.css";

const categories = [
  {
    group: "Nấu ăn",
    items: ["Nồi chiên không dầu", "Lò vi sóng", "Bếp từ"],
  },
  {
    group: "Pha chế",
    items: ["Máy pha cà phê", "Máy xay sinh tố", "Máy ép trái cây"],
  },
  {
    group: "Làm sạch",
    items: ["Máy rửa bát", "Máy lọc nước", "Máy hút bụi"],
  },
];

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="category-wrapper"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <span className="navbar-tab">Danh mục</span>

      {showDropdown && (
        <div className="category-dropdown">
          {categories.map((cat) => (
            <div key={cat.group} className="category-group">
              <div className="category-group-title">{cat.group}</div>
              {cat.items.map((item) => (
                <div key={item} className="category-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
