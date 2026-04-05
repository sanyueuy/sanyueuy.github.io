window.siteData = {
  profile: {
    name: '你的姓名',
    role: 'Assistant Professor / PhD Candidate / Researcher',
    affiliation: '你的院系 / 实验室 / 学校名称',
    subtitle: '研究兴趣可写成一句清晰的定位，例如：聚焦人工智能、数据挖掘与可信机器学习。',
    description:
      '这是一个已经可以直接上线的学术主页模板。你可以把姓名、单位、研究方向、论文、新闻和联系方式替换成自己的真实信息，无需改动页面结构。',
    about:
      '我主要从事某某方向研究，关注某某问题及其在某某场景中的应用。当前工作围绕理论方法、系统设计与真实数据验证展开，欢迎学生申请、学术交流与跨学科合作。',
    initials: 'YS',
    focus: ['人工智能', '机器学习', '数据分析', '人机交互'],
    quickLinks: [
      { label: 'Google Scholar', href: '#' },
      { label: 'GitHub', href: 'https://github.com/sanyueuy' },
      { label: 'CV', href: '#' },
      { label: 'Projects', href: '#projects' }
    ],
    contactText:
      '如果你对研究合作、学生培养、课程共建或项目申请感兴趣，欢迎通过邮箱或学术主页链接联系我。',
    contact: [
      { label: 'Email', href: 'mailto:your-email@example.com' },
      { label: 'GitHub', href: 'https://github.com/sanyueuy' },
      { label: 'Scholar', href: '#' }
    ]
  },
  research: [
    {
      title: '研究主题一',
      description: '用 1 至 2 句话介绍这个方向的核心问题、你的方法路线以及当前进展。'
    },
    {
      title: '研究主题二',
      description: '可以写你关注的应用场景、技术挑战，以及与现有工作的差异化价值。'
    },
    {
      title: '研究主题三',
      description: '如果你有跨学科方向，这里适合放方法与应用的连接点。'
    }
  ],
  news: [
    {
      date: '2026.04',
      text: '学术主页第一版上线，可继续补充个人资料、代表论文与新闻动态。'
    },
    {
      date: '2026.03',
      text: '在这里填写最近的论文录用、项目申请、报告邀请或获奖信息。'
    },
    {
      date: '2026.01',
      text: '把时间线控制在 3 至 6 条，主页会更紧凑也更容易维护。'
    }
  ],
  projects: [
    {
      title: '项目名称一：你的核心展示项目',
      period: '2025 - Present',
      summary:
        '这里用 2 至 3 句话介绍项目目标、你负责的部分、技术亮点和实际效果。这个区域适合放最想展示给招生老师、合作方或访问者的项目。',
      tags: ['多模态', '可视化', '系统实现'],
      links: [
        { label: 'Project Page', href: '#' },
        { label: 'GitHub', href: '#' }
      ],
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
          alt: '项目截图示例',
          caption: '项目界面、系统架构图、实验结果图都可以放在这里。'
        },
        {
          type: 'video',
          src: 'https://your-bucket.cos.ap-shanghai.myqcloud.com/demo/project-1.mp4',
          poster: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
          caption: '把这里替换成腾讯云 COS 的公开视频链接，浏览器会直接播放。'
        }
      ]
    },
    {
      title: '项目名称二：带图片与演示视频的成果页',
      period: '2024 - 2025',
      summary:
        '第二个项目可以更偏工程或应用，展示真实场景、部署过程、用户交互视频或实验录像。',
      tags: ['计算机视觉', '交互设计', '应用落地'],
      links: [
        { label: 'Paper', href: '#' },
        { label: 'Demo', href: '#' }
      ],
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
          alt: '项目图片示例',
          caption: '建议每个项目放 1 至 3 张图，避免首页过长。'
        }
      ]
    }
  ],
  publications: [
    {
      title: '论文标题示例：A Clear and Elegant Paper Title Goes Here',
      venue: 'Journal / Conference, 2026',
      authors: '你的姓名, 合作者 A, 合作者 B',
      summary: '这里写一两句摘要式介绍，说明问题、方法和结果亮点。',
      links: [
        { label: 'Paper', href: '#' },
        { label: 'Code', href: '#' },
        { label: 'BibTeX', href: '#' }
      ]
    },
    {
      title: '论文标题示例：Another Representative Publication',
      venue: 'Top Conference / Preprint, 2025',
      authors: '你的姓名, 合作者 C, 合作者 D',
      summary: '可以突出你的贡献，例如提出新模型、构建数据集或完成系统部署。',
      links: [
        { label: 'Paper', href: '#' },
        { label: 'Slides', href: '#' }
      ]
    }
  ],
  experience: [
    {
      title: '学校 / 机构名称',
      period: '2022 - Present',
      description: '职位、项目经历或研究方向简介。'
    },
    {
      title: '上一段教育 / 工作经历',
      period: '2018 - 2022',
      description: '学位、导师、研究主题或主要贡献。'
    }
  ],
  service: [
    {
      title: '教学',
      description: '课程名称、授课对象、课程建设或指导学生经历。'
    },
    {
      title: '学术服务',
      description: '审稿、组织 workshop、担任 TA / mentor 或学术社群服务。'
    }
  ]
};
