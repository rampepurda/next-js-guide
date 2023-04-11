import React from "react";
import style from "../../../../pages/guide/guide-sidebar.module.scss";
import classNames from "classnames";

export const ChFour = ({ID}: {ID: number}) => {
  const isActive: boolean = true

  return (
    <div style={{display: ID === 4 ? 'block' : 'none'}}>
      <h2>4. classNames Library</h2>
      <ul>
        <li><strong>Installation:</strong>
          <br />
          <h4>yarn add classnames</h4>
        </li>
        <li>
          <h3>Implementation:</h3>
          <code>&lt;div className=&#123;<strong><span style={{color: 'orange'}}>classNames</span>(`${style.SideBar}`, Style.SideBar, 'cols')</strong>&#125;&gt;</code>
          <hr/>
          <h3>if statement:</h3>
          const isActive: boolean = true
          <code>&lt;div className=&#123;<span style={{color: 'orange'}}>classNames</span>('cols'), <strong>&#123;</strong><br/>
            <strong style={{color: 'red'}}>[style.SideBar__active]: isActive</strong>, bgGreen: isActive, bgRed: isActive,<br/>
            <strong>&#125;</strong>)
            &#125;)</code>
        </li>
      </ul>
      <h3 className={classNames( 'testClass', {
        [style.SideBar__active]: isActive,
        bgGreen: isActive,
        bgRed: isActive,
      })}>ClassNames - testing if Condition</h3>
    </div>
  )
}

