export function timeAgo(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date(timestamp);
    const timeDifference = currentDate - targetDate;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    if (years > 0) {
      return years === 1 ? "1 Year ago" : `${years} Years ago`;
    } else if (months > 0) {
      return months === 1 ? "1 Month ago" : `${months} Months ago`;
    } else if (days > 0) {
      return days === 1 ? "1 Day ago" : `${days} Days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "1 Hour ago" : `${hours} Hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "1 Minute ago" : `${minutes} Minutes ago`;
    } else {
      return "Just now";
    }
  }
  