export default function formatTime(time: number | null) {
  const pad = (val: any) => ("0" + val).slice(-2);
  if (time) {
    if (Math.floor(time / 3600) !== 0) {
      return [Math.floor(time / 3600), Math.floor((time % 3600) / 60), time % 60].map(pad).join(":");
    } else {
      return [Math.floor((time % 3600) / 60), time % 60].map(pad).join(":");
    }
  } else {
    return "";
  }
}
