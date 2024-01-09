// OOP

// class untuk membuat blueprint//templet/cetakan yang akan digunakan pada objet
class Testimonial {
  constructor(name, review, image) {
    this.name = name;
    this.review = review;
    this.image = image;
  }
  // methode html untuk mendapatkan/mengembalikan nilai pada html
  html() {
    return `
            <div class="testimonial">
                <img src="${this.image}" class="profile-testimonial" />
                <p class="quote">"${this.review}"</p>
                <p class="author">- ${this.name}</p>
            </div>
        `;
  }
}

// membuat objek dari cetakan atau blueprint class yang telah kita buat dan menjalankanya dengan kodingan berikut
const testimonial2 = new Testimonial("Muhamad Abidin", "Teman Pembentuk Karakter", "https://static.zerochan.net/Hunter.%C3%97.Hunter.full.1456912.jpg");
const testimonial3 = new Testimonial(
  "Mentor X",
  "Kemanapun pergi kenangan selalu ada",
  "https://renote.net/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMHovREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--afdf1ef8332439b83dbf1a9f8d25c57e18dbe780/guri-do.jpg"
);
const testimonial4 = new Testimonial("Mentor Surya", "Manusia hanyalah alat", "https://static.zerochan.net/Hunter.%C3%97.Hunter.full.987760.jpg");

// sebuah array yang berisi data object
const testimonials = [testimonial2, testimonial3, testimonial4];

// perulangan untuk menambahkan hmtl() sesuai dengan length/ banyak data yang ada
let testimonialHTML = ``;
for (let index = 0; index < testimonials.length; index++) {
  testimonialHTML += testimonials[index].html();
}

// untuk mengisi data pada pada html menggunakan innerHTML diambil dari
document.getElementById("testimonials").innerHTML = testimonialHTML;
