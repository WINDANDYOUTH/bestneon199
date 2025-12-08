# 主页布局重构说明

## 概述
已成功将主页从 Shopify 商店布局中分离出来，使其成为一个独立的展示页面，无导航栏，全屏宽度显示。

## 主要更改

### 1. 创建新的 ShopLayout
**文件**: `src/layouts/shop-layout.tsx`

- 专门用于 Shopify 相关页面（购物车、产品列表、产品详情等）
- 包含导航栏（HeaderSection）和购物车功能
- 保持原有的 max-w-7xl 容器宽度限制

### 2. 主页移除布局包装
**文件**: `src/pages/index.tsx`

**之前**:
```tsx
import { StoreLayout } from "@site/layouts/store-layout";

export default function Page() {
  return (
    <StoreLayout>
      <HeroSection />
      <WhyChooseUs />
    </StoreLayout>
  );
}
```

**现在**:
```tsx
export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
    </>
  );
}
```

**效果**:
- ✅ 无导航栏
- ✅ 全屏宽度
- ✅ 纯 sections 组合
- ✅ 完全独立的展示页面

### 3. 更新 Shopify 相关页面

所有 Shopify 功能页面已更新为使用 `ShopLayout`:

#### 购物车页面
**文件**: `src/pages/cart.tsx`
- 使用 `ShopLayout`
- 包含导航栏和购物车图标

#### 产品列表页面
**文件**: `src/pages/products/index.tsx`
- 使用 `ShopLayout`
- 包含导航栏和购物车功能

#### 产品详情页面
**文件**: `src/pages/products/[handle].tsx`
- 使用 `ShopLayout`
- 包含导航栏和购物车功能

## 文件结构

```
src/
├── layouts/
│   ├── store-layout.tsx      # 旧文件（可以保留或删除）
│   └── shop-layout.tsx        # 新文件 - Shopify 页面专用
├── pages/
│   ├── index.tsx              # 主页 - 无布局，全屏宽度
│   ├── cart.tsx               # 使用 ShopLayout
│   └── products/
│       ├── index.tsx          # 使用 ShopLayout
│       └── [handle].tsx       # 使用 ShopLayout
└── sections/
    ├── hero-section.tsx       # 主页 Hero 区块
    ├── why-choose-us.tsx      # 主页优势区块
    ├── header-section.tsx     # 导航栏（仅在 ShopLayout 中使用）
    └── cart-section.tsx       # 购物车区块
```

## 页面对比

### 主页 (/)
- ❌ 无导航栏
- ✅ 全屏宽度
- ✅ 纯展示内容
- ✅ Hero Section + Why Choose Us
- 🎯 目标：展示公司业务、信息、优势

### Shopify 页面 (/cart, /products)
- ✅ 有导航栏
- ✅ 有购物车图标
- ✅ 标准容器宽度 (max-w-7xl)
- 🎯 目标：电商功能

## 添加新的主页 Section

现在可以轻松添加新的 section 到主页：

```tsx
// src/pages/index.tsx
import { HeroSection } from "@site/sections/hero-section";
import { WhyChooseUs } from "@site/sections/why-choose-us";
import { YourNewSection } from "@site/sections/your-new-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <YourNewSection />  {/* 添加新 section */}
    </>
  );
}
```

每个 section 可以自由控制：
- 宽度（全屏或容器）
- 背景色
- 内边距
- 布局样式

## 优势

### 1. 清晰的职责分离
- **主页**: 纯展示页面，无电商功能
- **Shopify 页面**: 完整的电商功能

### 2. 灵活的设计自由度
- 主页可以使用全屏宽度设计
- 每个 section 独立控制样式
- 不受导航栏和容器限制

### 3. 更好的用户体验
- 主页更像一个营销落地页
- 无干扰的展示体验
- 专注于公司介绍和业务展示

### 4. 易于维护
- 主页和商店功能完全分离
- 修改主页不影响商店功能
- 添加新 section 非常简单

## 下一步建议

可以继续添加以下 sections 到主页：

1. **产品展示区** - 展示热门产品或案例
2. **工作流程** - 展示从设计到生产的流程
3. **客户评价** - 展示客户反馈和案例
4. **公司介绍** - 团队、历史、使命
5. **联系表单** - 询盘或联系方式
6. **页脚** - 公司信息、社交媒体链接

每个 section 都可以是全屏宽度，完全自定义设计！

## 验证

访问以下页面验证更改：

- **主页**: http://localhost:3000 
  - 应该看到：无导航栏，全屏 Hero Section
  
- **购物车**: http://localhost:3000/cart
  - 应该看到：有导航栏，有购物车图标
  
- **产品列表**: http://localhost:3000/products
  - 应该看到：有导航栏，有购物车图标

## 总结

✅ 主页已成功移除导航栏和布局限制
✅ Shopify 功能页面保持完整的电商功能
✅ 代码结构清晰，易于维护和扩展
✅ 主页可以通过添加不同的 sections 完整展示公司信息
