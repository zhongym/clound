

package com.cloud.admin.api.vo;


import com.cloud.admin.api.dto.DictTree;
import com.cloud.admin.api.dto.MenuTree;
import com.cloud.admin.api.dto.TreeNode;
import com.cloud.admin.api.entity.SysDict;
import com.cloud.admin.api.entity.SysMenu;
import lombok.experimental.UtilityClass;

import java.util.ArrayList;
import java.util.List;

/**
 * @author ygnet
 * @date 2017年11月9日23:34:11
 */
@UtilityClass
public class TreeUtil {
    /**
     * 两层循环实现建树
     *
     * @param treeNodes 传入的树节点列表
     * @return
     */
    public <T extends TreeNode> List<T> bulid(List<T> treeNodes, Object root) {
        List<T> trees = new ArrayList<>();
        for (T treeNode : treeNodes) {
            if (root.equals(treeNode.getParentId())) {
                trees.add(treeNode);
            } else {
                //查看当前是否有上级
                boolean has = Boolean.TRUE;
                for (T it : treeNodes) {
                    if (it.getId().equals(treeNode.getParentId())) {
                        has = Boolean.FALSE;
                        break;
                    }
                }
                if (has) {
                    trees.add(treeNode);
                }
            }
            for (T it : treeNodes) {
                if (it.getParentId().equals(treeNode.getId())) {
                    if (treeNode.getChildren() == null) {
                        treeNode.setChildren(new ArrayList<>());
                    }
                    treeNode.add(it);
                }
            }
        }
        return trees;
    }

    /**
     * 使用递归方法建树
     *
     * @param treeNodes
     * @return
     */
    public <T extends TreeNode> List<T> buildByRecursive(List<T> treeNodes, Object root) {
        List<T> trees = new ArrayList<T>();
        for (T treeNode : treeNodes) {
            if (root.equals(treeNode.getParentId())) {
                trees.add(findChildren(treeNode, treeNodes));
            }
        }
        return trees;
    }

    /**
     * 递归查找子节点
     *
     * @param treeNodes
     * @return
     */
    public <T extends TreeNode> T findChildren(T treeNode, List<T> treeNodes) {
        for (T it : treeNodes) {
            if (treeNode.getId().equals(it.getParentId())) {
                if (treeNode.getChildren() == null) {
                    treeNode.setChildren(new ArrayList<>());
                }
                treeNode.add(findChildren(it, treeNodes));
            }
        }
        return treeNode;
    }

    /**
     * 通过sysMenu创建树形节点
     *
     * @param menus
     * @param root
     * @return
     */
    public List<MenuTree> bulidTree(List<SysMenu> menus, String root) {
        List<MenuTree> trees = new ArrayList<>();
        MenuTree node;
        for (SysMenu menu : menus) {
            node = new MenuTree();
            node.setId(menu.getMenuId());
            node.setParentId(menu.getParentId());
            node.setName(menu.getName());
            node.setPath(menu.getPath());
            node.setCode(menu.getPermission());
            node.setLabel(menu.getName());
            node.setComponent(menu.getComponent());
            node.setIcon(menu.getIcon());
            node.setKeepAlive(menu.getKeepAlive());
            node.setPermission(menu.getPermission());
            node.setSort(menu.getSort());
            node.setType(menu.getType());
            node.setParentIds(menu.getParentIds());
            trees.add(node);
        }
        return TreeUtil.bulid(trees, root);
    }


    public List<DictTree> bulidDictTree(List<SysDict> dicts, String root) {
        List<DictTree> trees = new ArrayList<>();
        DictTree node;
        for (SysDict dict : dicts) {
            node = new DictTree();
            node.setId(dict.getId());
            node.setParentId(dict.getParentId());
            node.setLabel(dict.getLabel());
            node.setType(dict.getType());
            node.setDescription(dict.getDescription());
            node.setRemarks(dict.getRemarks());
            node.setSort(dict.getSort());
            node.setValue(dict.getValue());
            node.setUpdateTime(dict.getUpdateTime());
            node.setParentIds(dict.getParentIds());
            trees.add(node);
        }
        return TreeUtil.bulid(trees, root);
    }

}
