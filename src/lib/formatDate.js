export function formatDate(dateString) {
    const date = new Date(dateString);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    const year = date.getFullYear();
   
    // Добавляем ведущие нули при необходимости
    if (month < 10) {
    month = '0' + month;
    }
    if (day < 10) {
    day = '0' + day;
    }
   
    return `${day}.${month}.${year}`;
}