/* 添加在原有CSS最后 */
/* ========== 日记模块 ========== */
.diary-section {
  margin: 4rem 0;
  padding: 2rem;
  position: relative;
}

.diary-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 15px;
  z-index: -1;
}

.diary-entries {
  display: grid;
  gap: 2rem;
}

.diary-entry {
  background: rgba(255,255,255,0.08);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease;
  display: none; /* 初始隐藏 */
}

.diary-entry:nth-child(-n+3) {
  display: block; /* 默认显示前3篇 */
}

.diary-entry:hover {
  transform: translateY(-3px);
}

.diary-title {
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.diary-date {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 1rem;
}

.diary-content {
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
}

.diary-content p {
  margin-bottom: 0.8rem;
}

/* 分页控件 */
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.pagination-btn {
  background: rgba(255,255,255,0.1);
  border: none;
  color: var(--primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-btn:hover {
  background: rgba(255,255,255,0.2);
  transform: scale(1.1);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.page-indicator {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.9);
}

@media (max-width: 768px) {
  .diary-entry {
    padding: 1rem;
  }
}
