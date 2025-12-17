import { useEffect, useState } from "react";

const cryptoIcons = [
  // Bitcoin
  {
    id: "btc",
    path: "M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.52 2.107c-.345-.087-.7-.168-1.053-.25l.527-2.127-1.313-.33-.54 2.165c-.285-.065-.567-.13-.84-.2l.001-.007-1.812-.454-.35 1.407s.974.223.954.237c.533.133.63.486.613.766l-.615 2.473c.037.01.085.024.137.045l-.14-.035-.864 3.475c-.065.162-.232.406-.606.314.014.02-.955-.238-.955-.238l-.652 1.514 1.71.426.946.243-.55 2.22 1.313.33.54-2.176c.36.1.708.19 1.05.273l-.537 2.154 1.314.33.548-2.213c2.26.428 3.96.255 4.674-1.79.58-1.65-.028-2.6-1.22-3.22.866-.2 1.52-.77 1.694-1.953zM14.2 17.88c-.412 1.65-3.2.757-4.103.534l.73-2.94c.902.226 3.802.67 3.373 2.407zm.412-4.154c-.375 1.504-2.69.74-3.44.552l.664-2.665c.75.188 3.167.538 2.776 2.113z",
    color: "hsl(var(--orange))",
  },
  // Ethereum
  {
    id: "eth",
    viewBox: "0 0 32 32",
    paths: [
      { d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z", fill: "currentColor" },
    ],
    color: "hsl(var(--cyan))",
  },
  // Litecoin
  {
    id: "ltc",
    viewBox: "0 0 32 32",
    path: "M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z",
    color: "hsl(var(--muted-foreground))",
  },
  // Solana
  {
    id: "sol",
    viewBox: "0 0 32 32",
    paths: [
      { d: "M7.5 20.5h14.8l-3.3 3.5H4l3.5-3.5zm0-6h14.8l-3.3 3.5H4l3.5-3.5zm14.8-2.5H7.5L4 8.5h15l3.3 3.5z", fill: "currentColor" },
    ],
    color: "hsl(var(--secondary))",
  },
  // BNB
  {
    id: "bnb",
    viewBox: "0 0 32 32",
    paths: [
      { d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.002L16 13.706 14.305 15.4l-.195.195-.107.107.105.107L16 17.706l2.294-2.294.002-.002-.004-.004z", fill: "currentColor" },
    ],
    color: "hsl(var(--orange))",
  },
  // USDT (Tether)
  {
    id: "usdt",
    viewBox: "0 0 32 32",
    paths: [
      { d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z", fill: "currentColor" },
    ],
    color: "hsl(var(--neon-green))",
  },
];

interface FloatingIcon {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
  rotation: number;
  crypto: typeof cryptoIcons[0];
}

const CryptoBackground = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = [];
      
      // Posições alternadas garantindo diversidade - esquerda e direita intercaladas
      const leftPositions = [
        { x: 5, y: 10 },
        { x: 8, y: 35 },
        { x: 3, y: 55 },
        { x: 12, y: 75 },
        { x: 6, y: 92 },
      ];
      
      const rightPositions = [
        { x: 92, y: 18 },
        { x: 88, y: 42 },
        { x: 95, y: 62 },
        { x: 85, y: 82 },
        { x: 90, y: 95 },
      ];

      // Distribuição: cada cripto aparece uma vez de cada lado, sem repetir perto
      const cryptoOrder = [...cryptoIcons]; // BTC, ETH, LTC, SOL, BNB, USDT
      
      // Lado esquerdo: BTC, LTC, BNB, ETH, SOL (alternado)
      const leftCryptos = [cryptoOrder[0], cryptoOrder[2], cryptoOrder[4], cryptoOrder[1], cryptoOrder[3]];
      // Lado direito: USDT, SOL, ETH, LTC, BTC (inverso alternado)
      const rightCryptos = [cryptoOrder[5], cryptoOrder[3], cryptoOrder[1], cryptoOrder[2], cryptoOrder[0]];

      leftPositions.forEach((pos, index) => {
        const crypto = leftCryptos[index % leftCryptos.length];
        newIcons.push({
          id: `left-${crypto.id}-${index}`,
          x: pos.x + (Math.random() * 3 - 1.5),
          y: pos.y + (Math.random() * 3 - 1.5),
          size: 28 + Math.random() * 16,
          opacity: 0.04 + Math.random() * 0.03,
          animationDelay: Math.random() * 8,
          animationDuration: 18 + Math.random() * 12,
          rotation: Math.random() * 30 - 15,
          crypto,
        });
      });

      rightPositions.forEach((pos, index) => {
        const crypto = rightCryptos[index % rightCryptos.length];
        newIcons.push({
          id: `right-${crypto.id}-${index}`,
          x: pos.x + (Math.random() * 3 - 1.5),
          y: pos.y + (Math.random() * 3 - 1.5),
          size: 28 + Math.random() * 16,
          opacity: 0.04 + Math.random() * 0.03,
          animationDelay: Math.random() * 8,
          animationDuration: 18 + Math.random() * 12,
          rotation: Math.random() * 30 - 15,
          crypto,
        });
      });

      setIcons(newIcons);
    };

    generateIcons();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float-slow"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            opacity: icon.opacity,
            animationDelay: `${icon.animationDelay}s`,
            animationDuration: `${icon.animationDuration}s`,
            transform: `rotate(${icon.rotation}deg)`,
          }}
        >
          <svg
            width={icon.size}
            height={icon.size}
            viewBox={icon.crypto.viewBox || "0 0 24 24"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: icon.crypto.color }}
          >
            {icon.crypto.path && (
              <path d={icon.crypto.path} fill="currentColor" />
            )}
            {icon.crypto.paths?.map((p, i) => (
              <path key={i} d={p.d} fill={p.fill} />
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CryptoBackground;
