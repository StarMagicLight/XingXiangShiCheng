// 常见问题库
const faq = [{
        question: /(产品|商品)/,
        answer: "我们提供多种优质产品，您可以在产品页面查看详细信息。"
    },
    {
        question: /(价格|多少钱)/,
        answer: "具体价格因产品而异，请选择您感兴趣的产品查看详情。"
    },
    {
        question: /(发货|配送)/,
        answer: "我们会在订单确认后1-2个工作日内发货，具体配送时间视地区而定。"
    },
    {
        question: /(售后|退换货)/,
        answer: "我们提供7天无理由退换货服务，如有任何问题请联系我们的客服。"
    },
    {
        question: /(支付|付款)/,
        answer: "我们支持支付宝、微信支付和银行卡支付等多种支付方式。"
    }
];

// 初始化聊天窗口
function initChat() {
    addMessage('您好，我是智能客服小豆，请问有什么可以帮您？', 'agent');
}

// 发送消息
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        setTimeout(() => {
            const response = getResponse(message);
            addMessage(response, 'agent');
        }, 1000);
    }
}

// 获取自动回复
function getResponse(message) {
    for (const item of faq) {
        if (item.question.test(message)) {
            return item.answer;
        }
    }
    return "抱歉，我没有理解您的问题。您可以尝试更具体地描述您的问题，或者联系人工客服。";
}

// 添加消息到聊天窗口
function addMessage(text, sender) {
    const chatBody = document.getElementById('chat-body');

    const message = document.createElement('div');
    message.classList.add('message', sender);

    const content = document.createElement('div');
    content.classList.add('message-content');
    content.textContent = text;

    const time = document.createElement('div');
    time.classList.add('message-time');
    time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    message.appendChild(content);
    message.appendChild(time);
    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 切换聊天窗口显示/隐藏
function toggleChat() {
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
}

// 初始化
initChat();