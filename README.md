# Getting Started with Create React App

# Menggunakan state di React.js adalah konsep penting yang memungkinkan komponen untuk menyimpan dan mengelola data yang dapat berubah seiring waktu. Berikut adalah panduan langkah demi langkah yang jelas dan sederhana untuk pemula tentang cara menggunakan state di React.js:

1. Memahami State
   State adalah objek khusus di dalam komponen React yang digunakan untuk menyimpan data atau informasi tentang komponen tersebut. Berbeda dengan props, state bersifat lokal dan hanya dapat diakses atau dimodifikasi di dalam komponen itu sendiri.

2. Persiapkan Proyek React
   Jika Anda belum memiliki proyek React, buat proyek baru menggunakan Create React App:

   ```bash
   npx create-react-app nama-folder-reactjsmu
   cd my-app
   npm start
   ```

   Ini akan memulai server pengembangan dan membuka aplikasi di browser.

3. Membuat Komponen dengan State
   Anda bisa menggunakan state dalam komponen fungsional dengan menggunakan hook useState atau dalam komponen kelas.

a. Komponen Induk

1. Buat file baru di dalam folder src/components bernama NavigationBar.js
2. Tambahkan kode berikut ke dalam file NavigationBar.js

   ```bash
        import "../App.css";

            const NavigationBar = ({ navValue }) => {
                return (
                    <div>
                        <nav>
                            <div className="logo">
                                <h1>Belajar State</h1>
                            </div>
                            <ul>
                                <li>
                                    <a href="home">{!navValue ? "Home" : navValue}</a>
                                </li>
                                <li>
                                    <a href="services">{!navValue ? "Services" : navValue}</a>
                                </li>
                                <li>
                                    <a href="blog">{!navValue ? "Blog" : navValue}</a>
                                </li>
                                <li>
                                    <a href="contact">{!navValue ? "Contact" : navValue}</a>
                                </li>
                            </ul>
                                <div className="hamburger">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                        </nav>
                        <div className="menubar">
                            <ul>
                                <li>
                                    <a href="home">Home</a>
                                </li>
                                <li>
                                    <a href="services">Services</a>
                                </li>
                                <li>
                                    <a href="blog">Blog</a>
                                </li>
                                <li>
                                    <a href="contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            };

            export default NavigationBar;
   ```

   4. Menggunakan Komponen di Aplikasi Utama
      Untuk melihat hasilnya, kita perlu menggunakan ParentComponent di dalam aplikasi utama.

   Buka src/App.js.
   Import NavigationBar dan tambahkan ke dalam return statement:

   ```bash
        import React, { useState } from "react";
        import "./App.css";
        import NavigationBar from "./components/NavigationBar";

        function App() {
        const [getNavbarValue, setNavbarValue] = useState("");

        const changeNavbarValueMyHome = () => {
            setNavbarValue("My Home");
        };
        const changeNavbarValueMyService = () => {
            setNavbarValue("My Service");
        };
        const changeNavbarValueMyBlog = () => {
            setNavbarValue("My Blog");
        };
        const changeNavbarValueMyContact = () => {
            setNavbarValue("My Contact");
        };

        return (
            <div className="App">
                <NavigationBar navValue={getNavbarValue} />
                <h1>INI HOMEPAGE</h1>
                <p>Belajar Menggunakan State</p>
                <button className="btn jarak" onClick={() => changeNavbarValueMyHome()}>
                    <a href="#">
                    <span>Ubah Navigasi</span>
                    </a>
                </button>
                <br />
                <button
                    className="btn jarak"
                    onClick={() => changeNavbarValueMyService()}
                >
                    <a href="#">
                    <span>Ubah Navigasi</span>
                    </a>
                </button>
                <br />
                <button className="btn jarak" onClick={() => changeNavbarValueMyBlog()}>
                    <a href="#">
                    <span>Ubah Navigasi</span>
                    </a>
                </button>
                <br />
                <button
                    className="btn jarak"
                    onClick={() => changeNavbarValueMyContact()}
                >
                    <a href="#">
                    <span>Ubah Navigasi</span>
                    </a>
                </button>
            </div>
            );
        }

        export default App;

   ```

5. Memahami dan Menjalankan Kode
   Dengan langkah-langkah di atas, kita telah membuat dan menggunakan state di React.

a. Komponen Fungsional (NavigationBar):
Menggunakan useState untuk mendeklarasikan state getNavbarValue.
setNavbarValue adalah fungsi untuk memperbarui state getNavbarValue.

b. Komponen Kelas (NavigationBar):
State navValue dideklarasikan di dalam constructor.
{!navValue ? "Services" : navValue} digunakan untuk memperbarui state count.

6. Jalankan Aplikasi
   Pastikan server pengembangan berjalan dengan:

   ```bash
   npm start
   ```

   Dengan mengikuti langkah-langkah ini, Anda dapat memahami cara menggunakan state di React.js untuk mengelola data yang dapat berubah dalam komponen. Selamat mencoba!
