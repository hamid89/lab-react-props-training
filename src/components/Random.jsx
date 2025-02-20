export default function Random({ min, max }) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return (
      <div className="random">
        <p>
          Random value between {min} and {max} → <strong>{randomValue}</strong>
        </p>
      </div>
    );
  }
  