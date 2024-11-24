export function MiGrid() {
    return (
        <>
            <line x1="0" y1="512" x2="1024" y2="512" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" />
            <line x1="512" y1="0" x2="512" y2="1024" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" />
            <line x1="0" y1="0" x2="1024" y2="1024" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" />
            <line x1="1024" y1="0" x2="0" y2="1024" stroke="black" strokeWidth={10} strokeDasharray="64, 64, 64" /> 
        </>
        );
  }