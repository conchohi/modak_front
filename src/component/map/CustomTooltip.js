const CustomTooltip = ({ darkmode, tooltipStyle, children }) => {
    return (
        <div style={{ 
            borderRadius: 0,
            color: "black",
            position: "fixed",
            padding: "10px",
            border: `1px solid`,
            backgroundColor: "white",
            ...tooltipStyle, 
        }}>
            {children}

        </div>
    )}
export default CustomTooltip;