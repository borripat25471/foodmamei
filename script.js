const products = [
    
    { id: 1, name: 'ดับเบิ้ลชีสเบอร์เกอร์', price: 159, category: 'เบอร์เกอร์', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
    { id: 2, name: 'เบอร์เกอร์ไก่กรอบซอสเกาหลี', price: 139, category: 'เบอร์เกอร์', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500' },
    { id: 3, name: 'เบอร์เกอร์เนื้อวากิวบาร์บีคิว', price: 219, category: 'เบอร์เกอร์', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500' },

    
    { id: 4, name: 'พาสต้าคาโบนาร่า', price: 189, category: 'พาสต้า', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500' },
    { id: 5, name: 'สปาเก็ตตี้ผัดขี้เมาทะเล', price: 179, category: 'พาสต้า', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500' },
    { id: 6, name: 'พาสต้าโบโลเนสซอสเนื้อ', price: 169, category: 'พาสต้า', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500' },

    
    { id: 7, name: 'พิซซ่าซีฟู้ดฮาวายเอี้ยน', price: 299, category: 'พิซซ่า', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
    { id: 8, name: 'พิซซ่ามาการิต้าชีส', price: 239, category: 'พิซซ่า', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500' },
    { id: 9, name: 'พิซซ่าเปปเปอโรนีชีสแน่น', price: 279, category: 'พิซซ่า', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500' },

    
    { id: 10, name: 'ไก่ทอดสูตรกรอบ', price: 70, category: 'ของทอด', img: 'https://plus.unsplash.com/premium_photo-1664391997303-dab867f07ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUUwJUI5JTg0JUUwJUI4JTgxJUUwJUI5JTg8JUUwJUI4JTk3JUUwJUI4JUFEJUUwJUI4JTk4fGVufDB8fDB8fHww' },
    { id: 11, name: 'เฟรนช์ฟรายส์ชีสราดเข้มข้น', price: 89, category: 'ของทอด', img: 'https://images.unsplash.com/photo-1639744210631-209fce3e256c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZyZW5jaCUyMGZyaWVzfGVufDB8fDB8fHww' },
    { id: 12, name: 'หัวหอมทอดกรอบ', price: 79, category: 'ของทอด', img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500' },
    { id: 13, name: 'นักเก็ตไก่ทอดซอสบาร์บีคิว', price: 79, category: 'ของทอด', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500' },
    { id: 14, name: 'ชิปโป้ชีสบอลยืด', price: 89, category: 'ของทอด', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500' },

    
    { id: 15, name: 'สลัดผักสดรวมราดน้ำสลัด', price: 60, category: 'สลัด', img: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D' },
    { id: 16, name: 'ซีซาร์สลัดอกไก่ย่าง', price: 119, category: 'สลัด', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500' },
    { id: 17, name: 'สลัดทูน่าอะโวคาโด', price: 139, category: 'สลัด', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500' },

    
    { id: 18, name: 'ชาไทยเย็นพรีเมียม', price: 65, category: 'เครื่องดื่ม', img: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=500' },
    { id: 19, name: 'โคล่าเย็นซ่า', price: 35, category: 'เครื่องดื่ม', img: 'https://images.unsplash.com/photo-1629654613528-5d0a2e4166de?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 20, name: 'ชาอุ่นสมุนไพร', price: 55, category: 'เครื่องดื่ม', img: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhfGVufDB8fDB8fHww' },
    { id: 21, name: 'ชามะนาวเย็นสดชื่น', price: 50, category: 'เครื่องดื่ม', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500' },
    { id: 22, name: 'อเมริกาโน่เย็นเข้มข้น', price: 60, category: 'เครื่องดื่ม', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500' },
    { id: 23, name: 'มะนาวโซดา', price: 65, category: 'เครื่องดื่ม', img: 'https://ima  ges.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500' },

    
    { id: 24, name: 'ไอศกรีมซอฟต์เสิร์ฟมัทฉะ', price: 45, category: 'ของหวาน', img: 'https://images.unsplash.com/photo-1779829278703-1967d99a7a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZWNyZWFtJTIwbWF0Y2hhfGVufDB8fDB8fHww' },
    { id: 25, name: 'ช็อกโกแลตลาวาเค้ก', price: 95, category: 'ของหวาน', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500' },
    { id: 26, name: 'บิงซูช็อกโกแลต', price: 129, category: 'ของหวาน', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500' },
    { id: 27, name: 'วาฟเฟิลไอศกรีมวานิลลา', price: 119, category: 'ของหวาน', img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500' },
    { id: 28, name: 'พานาคอตต้าซอสเบอร์รี', price: 85, category: 'ของหวาน', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500' }
];

let cart = [];
let currentCategory = 'ทั้งหมด'; // ตัวแปรจำหมวดหมู่ที่เลือกอยู่ปัจจุบัน

// ฟังก์ชันแสดงรายการสินค้า
function renderProducts(itemsToRender = products) {
    const grid = document.getElementById('productGrid');
    
    if (itemsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px 0;">ไม่พบรายการอาหารที่ตรงกัน</p>';
        return;
    }

    grid.innerHTML = itemsToRender.map(product => `
        <div class="product-card">
            <img src="${product.img}" class="product-img" alt="${product.name}">
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">฿${product.price}</div>
                <button class="add-btn" onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-plus"></i> เพิ่มลงตะกร้า
                </button>
            </div>
        </div>
    `).join('');
}

// ฟังก์ชันค้นหาจากช่อง Search (ทำงานร่วมกับหมวดหมู่ที่เลือก)
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = products.filter(product => {
        const matchesCategory = (currentCategory === 'ทั้งหมด') || (product.category === currentCategory);
        const matchesKeyword = product.name.toLowerCase().includes(keyword);
        return matchesCategory && matchesKeyword;
    });

    renderProducts(filtered);
}

// ฟังก์ชันกรองสินค้าตามหมวดหมู่
function filterCategory(categoryName, event) {
    currentCategory = categoryName;

    // ปรับสถานะปุ่ม Active
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // เรียกฟังก์ชันกรองข้อมูล
    searchProducts();
}

function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">ยังไม่มีสินค้าในตะกร้า</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p style="color:#ff4757; font-weight:bold;">฿${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('totalPrice').innerText = `฿${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartDrawer').classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) {
        alert('กรุณาเลือกสินค้าก่อนสั่งซื้อครับ');
        return;
    }
    alert('ขอบคุณสำหรับคำสั่งซื้อ! ระบบได้รับรายการเรียบร้อยครับ');
    cart = [];
    updateCartUI();
    toggleCart();
}

// เรียกใช้งานครั้งแรก
renderProducts();