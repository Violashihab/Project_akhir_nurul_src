import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-24 px-6">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Toko Nurul</h1>
        <p className="text-lg text-gray-600 mt-4">Toko Klontong Terpercaya di Sekitar Anda</p>
      </div>

      {/* About Us and Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Us Section */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-3xl font-semibold text-gray-800">Tentang Kami</h2>
          <p className="text-gray-700 mt-4">
            Toko Nurul adalah toko klontong yang melayani kebutuhan sehari-hari Anda dengan berbagai produk berkualitas, mulai dari bahan makanan, minuman, hingga kebutuhan rumah tangga lainnya. Kami hadir untuk memberikan kemudahan belanja bagi masyarakat sekitar dengan harga yang terjangkau dan pelayanan yang ramah.
          </p>
          <p className="text-gray-700 mt-4">
            Kami berkomitmen untuk selalu menyediakan barang berkualitas dengan harga yang bersaing. Pelayanan kami didukung oleh staf yang profesional dan siap membantu memenuhi kebutuhan belanja Anda.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-3xl font-semibold text-gray-800">Visi dan Misi</h2>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
            <p className="text-gray-700 mt-2">
              Menjadi toko klontong terdepan yang memberikan pengalaman belanja yang nyaman dan harga terjangkau untuk seluruh masyarakat.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-800">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Menyediakan produk berkualitas dengan harga terbaik.</li>
              <li>Memberikan pelayanan yang cepat dan ramah kepada pelanggan.</li>
              <li>Menjadi mitra yang dapat diandalkan dalam kebutuhan sehari-hari pelanggan.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <p className="text-gray-500">© 2025 Toko Nurul. Semua hak cipta dilindungi.</p>
      </div>
    </div>
  );
};

export default About;
