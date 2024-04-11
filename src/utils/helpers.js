/* eslint-disable no-extra-semi */
export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// export function formatDate() {
//   const date = new Date();
  
//   const options = {
//       weekday: "short",
//       year: "numeric",
//       month: "2-digit",
//       day: "numeric"
//   };
  
//   return date.toLocaleDateString("en", options);
// }

// export function formatDate(dateStr) {
//   return new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "short",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(new Date(dateStr));
// }


export function formatDate() {
const date = new Date();

return  new Intl.DateTimeFormat('en-US', {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};



export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
