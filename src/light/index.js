import oreo from './oreo'
import shallowSea from './shallowSea'
import lemonBubbles from './lemonBubbles'
import rose from './rose'
import seaBlueLine from './seaBlueLine'
import morandi from './morandi'
import classic5 from './classic5'
import classic6 from './classic6'
import classic7 from './classic7'
import cactus from './cactus'
import skyGreen from './skyGreen'
import classic2 from './classic2'
import classic3 from './classic3'
import classicGreen from './classicGreen'
import classicBlue from './classicBlue'
import blueSky from './blueSky'
import brainImpairedPink from './brainImpairedPink'
import earthYellow from './earthYellow'
import freshGreen from './freshGreen'
import freshRed from './freshRed'
import romanticPurple from './romanticPurple'
import pinkGrape from './pinkGrape'
import mint from './mint'
import gold from './gold'
import vitalityOrange from './vitalityOrange'
import greenLeaf from './greenLeaf'
import classic4 from './classic4'
import minions from './minions'
import simpleBlack from './simpleBlack'
import courseGreen from './courseGreen'
import coffee from './coffee'
import redSpirit from './redSpirit'
import avocado from './avocado'
import autumn from './autumn'
import classic8 from './classic8'
import classic9 from './classic9'
import classic10 from './classic10'
import classic11 from './classic11'
import classic12 from './classic12'
import classic13 from './classic13'
import classic14 from './classic14'
import classic15 from './classic15'

export default [
  {
    name: '天清綠',
    value: 'skyGreen',
    theme: skyGreen
  },
  {
    name: '經典綠',
    value: 'classicGreen',
    theme: classicGreen
  },
  {
    name: '經典藍',
    value: 'classicBlue',
    theme: classicBlue
  },
  {
    name: '天空藍',
    value: 'blueSky',
    theme: blueSky
  },
  {
    name: '偶像粉',
    value: 'brainImpairedPink',
    theme: brainImpairedPink
  },
  {
    name: '泥土黃',
    value: 'earthYellow',
    theme: earthYellow
  },
  {
    name: '清新綠',
    value: 'freshGreen',
    theme: freshGreen
  },
  {
    name: '清新紅',
    value: 'freshRed',
    theme: freshRed
  },
  {
    name: '浪漫紫',
    value: 'romanticPurple',
    theme: romanticPurple
  },
  {
    name: '粉紅葡萄',
    value: 'pinkGrape',
    theme: pinkGrape
  },
  {
    name: '薄荷',
    value: 'mint',
    theme: mint
  },
  {
    name: '金色vip',
    value: 'gold',
    theme: gold
  },
  {
    name: '活力橙',
    value: 'vitalityOrange',
    theme: vitalityOrange
  },
  {
    name: '綠葉',
    value: 'greenLeaf',
    theme: greenLeaf
  },
  {
    name: '小黃人',
    value: 'minions',
    theme: minions
  },
  {
    name: '簡約黑',
    value: 'simpleBlack',
    theme: simpleBlack
  },
  {
    name: '課程綠',
    value: 'courseGreen',
    theme: courseGreen
  },
  {
    name: '咖啡',
    value: 'coffee',
    theme: coffee
  },
  {
    name: '紅色精神',
    value: 'redSpirit',
    theme: redSpirit
  },
  {
    name: '牛油果',
    value: 'avocado',
    theme: avocado
  },
  {
    name: '秋天',
    value: 'autumn',
    theme: autumn
  },
  {
    name: '奧利奧',
    value: 'oreo',
    theme: oreo
  },
  {
    name: '淺海',
    value: 'shallowSea',
    theme: shallowSea
  },
  {
    name: '檸檬氣泡',
    value: 'lemonBubbles',
    theme: lemonBubbles
  },
  {
    name: '玫瑰',
    value: 'rose',
    theme: rose
  },
  {
    name: '海藍線',
    value: 'seaBlueLine',
    theme: seaBlueLine
  },
  {
    name: '莫蘭迪',
    value: 'morandi',
    theme: morandi
  },
  {
    name: '仙人掌',
    value: 'cactus',
    theme: cactus
  },
  {
    name: '心智圖經典2',
    value: 'classic2',
    theme: classic2
  },
  {
    name: '心智圖經典3',
    value: 'classic3',
    theme: classic3
  },
  {
    name: '心智圖經典4',
    value: 'classic4',
    theme: classic4
  },
  {
    name: '心智圖經典5',
    value: 'classic5',
    theme: classic5
  },
  {
    name: '心智圖經典6',
    value: 'classic6',
    theme: classic6
  },
  {
    name: '心智圖經典7',
    value: 'classic7',
    theme: classic7
  },
  {
    name: '心智圖經典8',
    value: 'classic8',
    theme: classic8
  },
  {
    name: '心智圖經典9',
    value: 'classic9',
    theme: classic9
  },
  {
    name: '心智圖經典10',
    value: 'classic10',
    theme: classic10
  },
  {
    name: '心智圖經典11',
    value: 'classic11',
    theme: classic11
  },
  {
    name: '心智圖經典12',
    value: 'classic12',
    theme: classic12
  },
  {
    name: '心智圖經典13',
    value: 'classic13',
    theme: classic13
  },
  {
    name: '心智圖經典14',
    value: 'classic14',
    theme: classic14
  },
  {
    name: '心智圖經典15',
    value: 'classic15',
    theme: classic15
  }
].map(item => {
  return {
    ...item,
    dark: false
  }
})
