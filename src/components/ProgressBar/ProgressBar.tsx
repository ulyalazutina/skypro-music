import styles from "./ProgressBar.module.css";

type ProgressBarProps = { max: number | string; value: number; step: number; onChange: (e: any) => void };

export default function ProgressBar({ max, value, step, onChange }: ProgressBarProps) {
  return (
    <input
      className={styles.styledProgressInput} 
      type="range" 
      min="0" 
      max={max}
      value={value}
      step={step} 
      onChange={onChange}
    />
  );
}
