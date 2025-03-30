// 提交留言
function submitFeedback() {
    const input = document.getElementById('feedback-input');
    const message = input.value.trim();
    const files = document.getElementById('image-upload').files;

    if (message || files.length > 0) {
        addFeedback(message, files);
        input.value = '';
        document.getElementById('image-upload').value = '';
    } else {
        alert('请输入留言或上传图片');
    }
}

// 添加留言
function addFeedback(message, files) {
    const feedbackList = document.getElementById('feedback-list');

    const item = document.createElement('div');
    item.classList.add('feedback-item');

    const content = document.createElement('div');
    content.classList.add('feedback-content');
    content.textContent = message;

    const images = document.createElement('div');
    images.classList.add('feedback-images');

    for (let i = 0; i < files.length; i++) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(files[i]);
        images.appendChild(img);
    }

    const meta = document.createElement('div');
    meta.classList.add('feedback-meta');
    meta.textContent = `用户：匿名用户 | 时间：${new Date().toLocaleString()}`;

    item.appendChild(content);
    if (files.length > 0) {
        item.appendChild(images);
    }
    item.appendChild(meta);

    feedbackList.prepend(item);
}

// 提交投诉
function submitComplaint() {
    const input = document.getElementById('complaint-input');
    const message = input.value.trim();

    if (message) {
        alert('投诉已提交，我们将尽快处理您的请求。');
        input.value = '';
        // 这里可以添加实际提交投诉到服务器的逻辑
    } else {
        alert('请输入投诉内容');
    }
}