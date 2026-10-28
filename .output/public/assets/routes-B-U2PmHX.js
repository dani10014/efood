import{a as e,i as t,r as n}from"./index-BSeL6yNJ.js";import{i as r,n as i,o as a,r as o,t as s}from"./Layout-DwGntp_a.js";var c=e(),l=a(o)`
  text-align: center;
  padding: 40px 0 40px;
  h1 {
    font-size: 36px;
    font-weight: 900;
    max-width: 540px;
    margin: 120px auto 0;
    line-height: 1.2;
  }
`,u=a.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 48px 80px;
  margin-top: 80px;
  list-style: none;
  padding: 0;
`,d=a.li`
  position: relative;
  background: var(--card);
  border: 1px solid var(--primary);
  color: var(--primary);
  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }
`,f=a.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  span {
    background: var(--primary);
    color: var(--secondary);
    font-size: 12px;
    font-weight: 700;
    padding: 6px 4px;
  }
`,p=a.div`
  padding: 8px;
  h3 {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`,m=a.div`
  a {
  display: inline-block;
  background: var(--primary);
  color: var(--secondary);
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-decoration: none;
  }
`;function h(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{children:(0,c.jsxs)(s,{children:[(0,c.jsx)(r,{children:`efood`}),(0,c.jsx)(`h1`,{children:`Viva experiências gastronômicas no conforto da sua casa`})]})}),(0,c.jsx)(s,{children:(0,c.jsx)(u,{children:n.map(e=>(0,c.jsxs)(d,{children:[(0,c.jsx)(`img`,{src:e.image,alt:e.name,width:1024,height:640,loading:`lazy`}),(0,c.jsxs)(f,{children:[e.highlight&&(0,c.jsx)(`span`,{children:`Destaque da semana`}),(0,c.jsx)(`span`,{children:e.category})]}),(0,c.jsxs)(p,{children:[(0,c.jsxs)(`h3`,{children:[e.name,` `,(0,c.jsxs)(`span`,{children:[e.rating,` ★`]})]}),(0,c.jsx)(`p`,{children:e.description}),(0,c.jsx)(m,{children:(0,c.jsx)(t,{to:`/restaurante/$id`,params:{id:e.id},children:`Saiba mais`})})]})]},e.id))})}),(0,c.jsx)(i,{})]})}export{h as component};