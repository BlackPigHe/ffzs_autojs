// 设置在UI线程运行，但没有Activity页面
// 同时只能有一个引擎在UI线程运行，因此有多个悬浮窗需要用同一个引擎管理
"ui-thread";

const {
  createWindow, canDrawOverlays, manageDrawOverlays,
  FLAG_WATCH_OUTSIDE_TOUCH, FLAG_NOT_FOCUSABLE, FLAG_NOT_TOUCHABLE
} = require('floating_window');
const { showToast } = require('toast');
const MotionEvent = $java.findClass('android.view.MotionEvent');

async function main() {
  // 检查悬浮窗权限
  while (!canDrawOverlays) {
    showToast('没有悬浮窗权限');
    manageDrawOverlays();
  }

  // 创建悬浮窗
  const window = createWindow({
    initialPosition: { x: 0, y: 100 },
    initialSize: { width: 900, height: 500 }
  });
  // 从xml设置View
  window.setViewFromXml(`
        <column bg="#ffffff" layout_weight="0.2" alpha="0.8f">
            <row padding="8">
                <text text="峰峰助手: ${global.version}" textColor="#FF0000" textSize="10" />                
                
            </row>
            <globalconsole id="console" h="100" textSize="6"/>
        </column>
    `);
  // <img id="dragHandle" src="@drawable/ic_drag_handle_black_48dp" margin="4 0" bg="?selectableItemBackground"/>
  //             <img id="close" src="@drawable/ic_close_black_48dp" margin="4 0" bg="?selectableItemBackground"/>
  // 获取用于拖拽的View
  // const { dragHandle, close, input, ok } = window.view.binding;
  // // 启用拖拽手势，拖动该View可以拖动窗口
  // window.enableDrag(dragHandle, {
  //   onClick: () => {
  //     // 拖拽锚点View被点击
  //     console.log('anchor click');
  //   },
  //   onLongClick: () => {
  //     // 拖拽锚点View被长按
  //     console.log('anchor long click');
  //   }
  // });
  // // 关闭按钮点击时关闭悬浮窗
  // close.on("click", () => {
  //   window.close();
  //   process.exit();
  // });
  // 在悬浮窗被点击时设置为可获取焦点，从而可以显示输入法
  focusableOnTouch(window);

  await window.show();
  $autojs.keepRunning();
}

function focusableOnTouch(window) {
  let focusable = false;
  // 设置为FLAG_WATCH_OUTSIDE_TOUCH以便在外部触摸时可感知到
  // window.addFlags(FLAG_WATCH_OUTSIDE_TOUCH);
  window.addFlags(FLAG_NOT_FOCUSABLE);
  // window.on('touch', event => {
  //   if (event.getAction() == MotionEvent.ACTION_DOWN && !focusable) {
  //     // 当悬浮窗被触摸时，移除不可聚焦标志位，即允许获取焦点
  //     window.removeFlags(FLAG_NOT_FOCUSABLE);
  //     focusable = true;
  //   } else if (event.getAction() == MotionEvent.ACTION_OUTSIDE && focusable) {
  //     // 点触摸在悬浮窗外部时，设置为不可聚焦，即移除悬浮窗焦点
  //     window.addFlags(FLAG_NOT_FOCUSABLE);
  //     focusable = false;
  //   }
  // });
}

module.exports = {
  main
}