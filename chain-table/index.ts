
// 206. 反转链表

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let cur = head;
    let pre = null;
    while (cur) {
        // save next
        const next = cur.next;
        // cur -> pre
        cur.next = pre;
        // update pre and cur
        pre = cur;
        cur = next;
    }
    return pre;

};