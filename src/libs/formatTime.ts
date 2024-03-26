export default function formatTime(time: number | null) {
  if (time) {
    let minutes = Math.trunc(time / 60)
      .toString()
      .padStart(2, "0");
    let seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  } else {
    return "";
  }
}
