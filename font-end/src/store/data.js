export const menuItems = [
  {
    id: 1,
    title: "Tất cả Laptop",
    slug: "all-laptop",
    submenus: {
      byBrand: [
        "ACER", "ASUS", "DELL", "HP", "LENOVO", "MSI", "APPLE", "GIGABYTE", "THINKPAD", "THINKBOOK"
      ],
      byPurpose: [
        "Gaming", "Lập trình", "Học tập, Văn phòng", "Đồ họa, Kỹ thuật", "Mỏng nhẹ", "Workstations"
      ],
      byPrice: [
        "Dưới 10 Triệu", "10 - 15 Triệu", "15 - 20 Triệu", "20 - 25 Triệu",
        "25 - 30 Triệu", "30 - 40 Triệu", "Trên 40 Triệu"
      ],
      bySpec: {
        CPU: ["Core i3", "Core i5", "Core i7", "AMD Ryzen 5", "Apple M1", "Apple M2"],
        GPU: ["Intel Iris", "NVIDIA RTX 3050", "RTX 4060", "RTX 4070"],
        RAM: ["8GB", "16GB", "32GB"],
        Storage: ["256GB SSD", "512GB SSD", "1TB SSD"],
        ScreenSize: ["13 inch", "14 inch", "15.6 inch", "17 inch"],
        Resolution: ["Full HD", "2K", "4K"],
        RefreshRate: ["60Hz", "120Hz", "144Hz"]
      },
      condition: ["Brand New 100%", "Outlet/Refurbished", "Like New"]
    }
  },
  {
    id: 2,
    title: "Laptop Gaming - Đồ Họa",
    slug: "laptop-gaming-dohoa",
    submenus: {
      brands: ["Acer", "Asus", "Dell", "Lenovo", "HP", "MSI"],
      graphicsType: ["Gaming", "Đồ họa"],
      price: ["15 - 20 Triệu", "20 - 25 Triệu", "25 - 30 Triệu", "Trên 30 Triệu"],
      spec: {
        GPU: ["RTX 3050", "RTX 4060", "RTX 4070", "RTX 4080"],
        RAM: ["16GB", "32GB"],
        Storage: ["512GB SSD", "1TB SSD"]
      }
    }
  },
  {
    id: 3,
    title: "Laptop Văn phòng - Học tập",
    slug: "laptop-vanphong",
    submenus: {
      brands: ["Acer", "Asus", "Dell", "Apple", "HP", "Lenovo"],
      models: {
        Acer: ["Aspire", "Swift"],
        Asus: ["Zenbook", "Vivobook"],
        Dell: ["Inspiron", "Latitude", "Vostro", "XPS"],
        Apple: ["Macbook Air", "Macbook Pro"]
      },
      price: ["Dưới 15 Triệu", "15 - 20 Triệu", "20 - 25 Triệu"],
      condition: ["Brand New", "Like New"]
    }
  },
  {
    id: 4,
    title: "Laptop Mỏng nhẹ - Di động",
    slug: "laptop-mong-nhe",
    submenus: {
      brands: ["Asus", "Apple", "Dell", "HP"],
      weight: ["Dưới 1.2kg", "1.2kg - 1.5kg"],
      screenSize: ["13 inch", "14 inch"],
      battery: ["Trên 10 giờ", "Trên 15 giờ"],
      storage: ["256GB SSD", "512GB SSD"],
      cpu: ["Core i5", "M1", "M2", "Ryzen 5"]
    }
  },
  {
    id: 5,
    title: "Laptop Đồ họa - Kỹ thuật",
    slug: "laptop-do-hoa-ky-thuat",
    submenus: {
      brands: ["MSI", "Gigabyte", "Asus", "Dell", "HP"],
      gpu: ["RTX 3060", "RTX 3070", "RTX 4080"],
      display: ["4K", "100% sRGB", "120Hz", "144Hz"],
      ram: ["16GB", "32GB", "64GB"],
      storage: ["1TB SSD", "2TB SSD"],
      price: ["25 - 35 Triệu", "Trên 35 Triệu"]
    }
  },
  {
    id: 6,
    title: "Laptop Sinh viên - Giá rẻ",
    slug: "laptop-sinh-vien",
    submenus: {
      brands: ["Acer", "Asus", "HP", "Lenovo"],
      cpu: ["Core i3", "Pentium", "Ryzen 3"],
      ram: ["4GB", "8GB"],
      storage: ["256GB SSD"],
      price: ["Dưới 10 Triệu", "10 - 12 Triệu", "12 - 15 Triệu"],
      condition: ["Brand New", "Refurbished"]
    }
  }

  //
 
];
