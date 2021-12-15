export const DataCard = ({label, value}: { label: string; value: string; }) => <div
  style={{display: "grid", gridTemplateColumns: "1fr auto", gap: "0 1.5rem", alignItems: "center"}}>
  <img src="https://freesvg.org/img/1543140976.png" alt="" style={{gridRow: "span 2", width: "50px"}}/>
  <b>{value}</b>
  <span>{label}</span>
</div>;
