const Gallery = () => {
      const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMaGf9RNWr8akGueCPc48srRENxjKUN5L3w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_o4Jq2O3AIGmkZ9jPx7z3otXIzjVgN-bFQ&s",  
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmzPYYtS9yJ89Gli4ZhrQr8kaUah4lktACw&s",  
      ]; 
  return (
    <section className="gallery" style={{ display: "flex", gap: "10px",
                                          justifyContent: "center",
                                          marginTop: "20px" }}>  
        {images.map((imageSrc, index) => (  
                <img key={index} src={imageSrc} alt={`Imagen ${index + 1}`} style={{ width: "150px", height: "150px" }} />  
        ))}  
    </section>
  );
}

export default Gallery;
