import headerStyles from "~/components/Layout/components/Header/Header.module.scss"
import containerStyles from "~/components/Layout/DefaultPlayout/DefaultLayout.module.scss"
import sidebarStyles from "~/components/Layout/DefaultPlayout/Sidebar/Sidebar.module.scss"
import classNames from "classnames/bind"

function HeaderModule() {
    const cx = classNames.bind(headerStyles)
    return cx
}

function ContainerModule(){
    const cx = classNames.bind(containerStyles)
    return cx
}

function SidebarModule(){
    const cx = classNames.bind(sidebarStyles)
    return cx
}

export {HeaderModule, ContainerModule, SidebarModule}