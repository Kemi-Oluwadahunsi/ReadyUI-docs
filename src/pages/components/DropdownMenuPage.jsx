import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";

const props = [
  { name: "trigger", type: "ReactNode", default: "—", description: "The element that toggles the dropdown menu on click." },
  { name: "items", type: "Array<{ label, icon?, onClick?, disabled?, divider?, children? }>", default: "[]", description: "Array of menu items. Items with children render nested submenus." },
  { name: "position", type: '"bottom-start" | "bottom-end" | "top-start" | "top-end"', default: '"bottom-start"', description: "Placement of the dropdown relative to the trigger." },
  { name: "closeOnSelect", type: "boolean", default: "true", description: "When true, the menu closes after an item is selected." },
  { name: "width", type: "number | string", default: '"auto"', description: "Width of the dropdown panel." },
  { name: "className", type: "string", default: "—", description: "Additional CSS class names for the root wrapper." },
  { name: "menuClassName", type: "string", default: "—", description: "Additional CSS class names for the dropdown panel." },
];

export default function DropdownMenuPage() {
  return (
    <ComponentPage
      name="DropdownMenu"
      description="Accessible dropdown menu with nested groups, dividers, and full keyboard navigation."
    >
      <Section title="Import">
        <CodeBlock code={`import { DropdownMenu } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={`<DropdownMenu
  trigger={<button>Options</button>}
  items={[
    { label: "Edit", icon: <EditIcon />, onClick: () => handleEdit() },
    { label: "Duplicate", icon: <CopyIcon />, onClick: () => handleDuplicate() },
    { label: "Delete", icon: <TrashIcon />, onClick: () => handleDelete() },
  ]}
/>`}
        />
      </Section>

      <Section title="Nested Menus">
        <CodeBlock
          code={`<DropdownMenu
  trigger={<button>Actions ▾</button>}
  position="bottom-end"
  items={[
    { label: "New", icon: <PlusIcon />, children: [
      { label: "File", onClick: () => newFile() },
      { label: "Folder", onClick: () => newFolder() },
      { label: "Project", onClick: () => newProject() },
    ]},
    { label: "Open Recent", children: [
      { label: "project-alpha", onClick: () => openRecent("alpha") },
      { label: "project-beta", onClick: () => openRecent("beta") },
    ]},
    { label: "Settings", icon: <GearIcon />, onClick: openSettings },
  ]}
/>`}
        />
      </Section>

      <Section title="With Dividers">
        <CodeBlock
          code={`<DropdownMenu
  trigger={<Avatar src={user.avatar} />}
  position="bottom-end"
  width={220}
  items={[
    { label: "Profile", icon: <UserIcon />, onClick: goToProfile },
    { label: "Settings", icon: <GearIcon />, onClick: goToSettings },
    { divider: true },
    { label: "Invite Team", icon: <UsersIcon />, onClick: inviteTeam },
    { label: "Help & Support", icon: <HelpIcon />, onClick: openHelp },
    { divider: true },
    { label: "Sign Out", icon: <LogoutIcon />, onClick: signOut },
  ]}
/>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
