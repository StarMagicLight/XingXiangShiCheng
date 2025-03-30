document.querySelector('.reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('reservation-date').value;
    const people = document.getElementById('number-of-people').value;
    const contact = document.getElementById('contact-info').value;

    // 这里可以添加实际的提交逻辑
    console.log('预约信息：', { date, people, contact });

    alert('预约成功！我们将会联系您确认预约信息。');
});