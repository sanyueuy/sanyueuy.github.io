window.siteData = {
  profile: {
    name: '吴洪',
    role: 'Embodied AI x AgriTech Builder',
    affiliation: '中国农业大学工学院 · 具身智能与农业机器人研究中心 · 陈建教授课题组',
    subtitle:
      '把大模型、机器人、视觉系统和真实农业场景接起来的本科开发者。',
    description: '',
    about:
      '目前就读于中国农业大学农业智能装备专业，依托工学院具身智能与农业机器人研究中心开展研究与开发。我长期把精力放在“从模型到系统”的完整链路上：既做 Depth Pro、SAM、DINOv3、YOLO 等模型的接入与训练，也做 Linux 部署、RAG 架构、树莓派与移动平台联调，以及面向真实用户和真实环境的产品化实现。相比只做单点算法，我更在意一个系统是否能真正跑起来、是否能稳定演示、是否能在具体场景中形成闭环。',
    initials: 'WH',
    focus: ['具身智能', '农业机器人', '计算机视觉', 'RAG Agent'],
    quickLinks: [
      { label: 'Projects', href: '#projects' },
      { label: '简历 PDF', href: './assets/docs/wuhong-cv.pdf' },
      { label: 'GitHub', href: 'https://github.com/sanyueuy' },
      { label: 'Email', href: 'mailto:wuhong0324@gmail.com' }
    ],
    contactText:
      '如果您对我的研究兴趣、项目经历或未来研究计划感兴趣，欢迎通过邮箱与我联系交流。我也非常期待向相关方向的老师进一步学习。',
    contact: [
      { label: '简历 PDF', href: './assets/docs/wuhong-cv.pdf' },
      { label: 'Email', href: 'mailto:wuhong0324@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/sanyueuy' },
      { label: 'MC Agent Video', href: 'https://www.bilibili.com/video/BV1vQXNBqEMc' }
    ]
  },
  research: [
    {
      title: '具身智能与农业机器人',
      description:
        '把云端大模型、边缘端树莓派设备、履带式移动平台与感知硬件接起来，构建可以移动、观测、决策和执行的农业场景智能体。'
    },
    {
      title: '农业视觉与玉米表型分析',
      description:
        '围绕玉米株高与结构化表型表示，探索 DINOv3、YOLO、SAM、Depth Pro 和可解释生物学先验在低成本高通量场景中的结合。'
    },
    {
      title: 'RAG Agent 与系统级产品化',
      description:
        '关注检索增强生成、工具调用、长期记忆、多轮执行和可用交互界面，让 Agent 在真实任务中形成稳定闭环。'
    }
  ],
  news: [
    {
      date: '2026.04',
      text: '整理并发布个人项目主页，集中展示农业智能、Agent 与具身智能方向的代表成果。'
    },
    {
      date: '2026.03',
      text: '继续推进 DiffCorn-Fusion 论文写作与实验结果整理，当前可靠主结果为独立测试集 MAE = 0.99 cm。'
    },
    {
      date: '2025.04',
      text: '启动 OpenClaw 与玉米育种支持大模型平台开发，围绕农业场景中的移动-观测-决策链路进行系统构建。'
    }
  ],
  projects: [
    {
      title: 'OpenClaw 具身智能小车',
      period: '2025.04 - 2026.04',
      summary: '云端大模型与边缘端履带式小车协同工作的农业具身智能平台。',
      description:
        'OpenClaw 将云端大模型、树莓派、履带式底盘、二自由度云台和相机整合进一个具备“移动-观测-决策”闭环的系统。我为它引入 MCP 与 skill 机制，让小车能力可以被结构化调用，并支持可变拓扑设计，即使部分能力基座离线，整体服务依然能够继续运行。最新演示展示了两类能力：一是通过自定义 Skill 调用 SLAM 完成环境建图；二是在不依赖 SLAM 的情况下搜索红色瓶子，并围绕视觉检测结果进行路径规划、决策执行、trial and error 调整和基础语音控制。',
      tags: ['Embodied AI', 'Raspberry Pi', 'MCP', 'Agricultural Robotics'],
      cover: {
        src: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/openclaw%E5%B0%8F%E8%BD%A6-%E5%B0%81%E9%9D%A2.jpg',
        alt: 'OpenClaw 小车封面图'
      },
      links: [
        {
          label: 'Video',
          href: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/openclaw%E5%B0%8F%E8%BD%A6.mp4'
        },
        {
          label: 'SLAM Demo',
          href: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/%E6%9C%80%E7%BB%88%E7%89%88.mp4'
        }
      ],
      media: [
        {
          type: 'video',
          src: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/openclaw%E5%B0%8F%E8%BD%A6.mp4',
          poster:
            'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/openclaw%E5%B0%8F%E8%BD%A6-%E5%B0%81%E9%9D%A2.jpg',
          caption: 'OpenClaw 演示视频，展示农业场景中的移动、观测与决策联动。'
        },
        {
          type: 'video',
          src: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/%E6%9C%80%E7%BB%88%E7%89%88.mp4',
          poster: './assets/projects/openclaw/slam-red-bottle-cover.jpg',
          caption:
            'OpenClaw 演示：自定义 Skill 调用 SLAM 完成建图；红色瓶子搜索则基于独立的视觉检测链路，结合规划、决策执行、trial and error 调整和基础语音控制完成任务。'
        }
      ]
    },
    {
      title: 'DiffCorn-Fusion',
      period: '2025.01 - 至今',
      summary: '高通量、低成本的玉米单视图表型检测与结构化表示方法。',
      description:
        '项目提出了一种面向田间与温室场景的 64D 玉米结构化表示，以 16 层 phytomer 建模玉米形态，并将 DINOv3 视觉特征、目标框提取与相机条件信息融合到端到端回归流程中。在亲自采集的中国农业大学温室数据上，模型参数量约 675k，独立测试集达到 MAE = 0.99 cm。',
      tags: ['DINOv3', 'YOLO', 'Maize Phenotyping', '64D Representation'],
      cover: {
        src: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/dcf-%E5%B0%81%E9%9D%A2.jpg',
        alt: 'DiffCorn-Fusion 封面图'
      },
      links: [
        {
          label: 'Video',
          href: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/dcf.mp4'
        }
      ],
      media: [
        {
          type: 'video',
          src: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/dcf.mp4',
          poster:
            'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/dcf-%E5%B0%81%E9%9D%A2.jpg',
          caption: 'DCF 演示视频，展示玉米表型检测与结果输出。'
        }
      ]
    },
    {
      title: '玉米育种 Agent',
      period: '2025.01 - 至今',
      summary: '把 Depth Pro、SAM、RAG 与育种知识结合起来的玉米智能分析 Agent。',
      description:
        '这个项目与 DCF 方法分开，重点是让 Agent 具备“看图理解、工具调用与知识推理”能力。我将 META 的 SAM、Apple 的 Depth Pro 封装成可调用工具，并结合育种知识库与 RAG 机制，让系统能够围绕玉米图像完成分析、辅助理解和决策支持。',
      tags: ['Depth Pro', 'SAM', 'RAG', 'Function Tools'],
      cover: {
        src: './assets/projects/corn-agent/cover.png',
        alt: '玉米育种 Agent 封面图'
      },
      links: [
        {
          label: 'Video',
          href: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/agentcron.mp4'
        }
      ],
      media: [
        {
          type: 'video',
          src: 'https://vedio-1259247410.cos.ap-beijing.myqcloud.com/agentcron.mp4',
          poster: './assets/projects/corn-agent/cover.png',
          caption: '玉米育种 Agent 演示视频，围绕图像理解、工具调用与知识支持展开。'
        }
      ]
    },
    {
      title: 'MC Agent',
      period: '2024.12 - 2025.06',
      summary: '部署在 Linux 云服务器上的 Minecraft 智能管家，支持长期记忆与自然语言执行。',
      description:
        '我独立开发了基于 DeepSeek 与 RAG 的 Minecraft 服务器智能管理 Agent。底层通过 RCON 获取玩家坐标、生命值、手持物品和世界状态，知识层抓取原版与模组 Wiki 并用 BGE-M3 + FAISS 组织检索，决策层通过严格 JSON prompt 将自然语言请求转成可执行的游戏指令，并实现长短期记忆与游戏数据自动备份。',
      tags: ['RCON', 'BGE-M3', 'FAISS', 'Game Agent'],
      cover: {
        src: './assets/projects/mc-agent/scene-1.png',
        alt: 'MC Agent 截图'
      },
      links: [
        { label: 'GitHub', href: 'https://github.com/sanyueuy/mc-ai-assistant' },
        { label: 'Bilibili Video', href: 'https://www.bilibili.com/video/BV1vQXNBqEMc' }
      ],
      media: [
        {
          type: 'image',
          src: './assets/projects/mc-agent/scene-1.png',
          alt: 'MC Agent 与玩家交互截图 1',
          caption: '支持用自然语言与 Agent 交互，并将请求翻译成服务器操作。'
        },
        {
          type: 'image',
          src: './assets/projects/mc-agent/scene-2.png',
          alt: 'MC Agent 与玩家交互截图 2',
          caption: '能够基于知识和当前状态给出具体、可执行的反馈。'
        },
        {
          type: 'image',
          src: './assets/projects/mc-agent/scene-3.png',
          alt: 'MC Agent 与玩家交互截图 3',
          caption: '演示 Agent 对复杂游戏机制、命令与实体管理的理解能力。'
        },
        {
          type: 'external-video',
          href: 'https://www.bilibili.com/video/BV1vQXNBqEMc',
          poster: './assets/projects/mc-agent/scene-1.png',
          caption: '完整演示视频托管在哔哩哔哩，点击封面跳转观看。'
        }
      ]
    },
    {
      title: 'MentorDB',
      period: '2025',
      summary: '用自然语言找导师的检索系统，把“招生信息 + 主页证据 + 溯源卡片”做成完整工作流。',
      description:
        'MentorDB 关注的是高质量检索与可信结果呈现。系统根据研究方向、招生说明和公开主页证据，帮助用户快速筛选更适合的导师，并在结果页中展示命中证据、来源摘要、导师档案和可追溯来源，兼顾“可用性”和“可信度”。',
      tags: ['Search UX', 'Evidence Retrieval', 'Source Tracing', 'LLM App'],
      cover: {
        src: './assets/projects/mentordb/search-home.png',
        alt: 'MentorDB 首页'
      },
      links: [
        { label: 'GitHub', href: 'https://github.com/sanyueuy/MentorDB' }
      ],
      media: [
        {
          type: 'image',
          src: './assets/projects/mentordb/search-home.png',
          alt: 'MentorDB 首页截图',
          caption: '自然语言查询入口与多维筛选界面。'
        },
        {
          type: 'image',
          src: './assets/projects/mentordb/result-view.png',
          alt: 'MentorDB 结果页截图',
          caption: '结果页展示命中证据、标签与导师卡片。'
        },
        {
          type: 'image',
          src: './assets/projects/mentordb/profile-view.png',
          alt: 'MentorDB 导师档案截图',
          caption: '导师档案页提供可追溯来源与结构化信息。'
        }
      ]
    }
  ],
  publications: [
    {
      title:
        'End-to-End Intelligent Maize Plant Height Estimation: A Geometry-Constrained Single View Metrology Framework',
      venue: 'Information Processing in Agriculture 投稿中',
      authors: '作者之一：吴洪（第三作者）',
      summary:
        '面向复杂大田环境下的玉米株高估计，结合单视图几何与深度学习感知，实现非接触式、高精度表型参数自动提取。',
      links: []
    }
  ],
  experience: [
    {
      title: '中国农业大学 · 农业智能装备（理科试验班）',
      period: '2023.09 - 至今',
      description:
        '工学院拔尖培养体系，本科阶段持续围绕具身智能、农业机器人、视觉系统与 Agent 产品进行研究和开发。'
    },
    {
      title: '工学院具身智能与农业机器人研究中心',
      period: '科研经历',
      description:
        '在导师团队支持下开展具身智能平台、玉米育种支持大模型与视觉表型分析系统的系统研发。'
    }
  ],
  service: [
    {
      title: '系统开发与部署',
      description:
        '擅长 Linux 部署、RAG 架构、前后端协同、云端服务与边缘设备联调，强调从模型到系统的完整落地。'
    },
    {
      title: '跨学科项目推进',
      description:
        '长期在 AI、机器人、农业场景和产品实现之间快速切换，偏好做高完成度、可演示、可上线的作品。'
    }
  ]
};
