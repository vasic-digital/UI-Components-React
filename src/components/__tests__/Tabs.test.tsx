import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs'

describe('Tabs', () => {
  const renderTabs = (props: { defaultValue?: string; value?: string; onValueChange?: (v: string) => void } = {}) =>
    render(
      <Tabs {...props} data-testid="tabs">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
      </Tabs>
    )

  describe('Tabs (root)', () => {
    it('renders children correctly', () => {
      renderTabs({ defaultValue: 'tab1' })
      expect(screen.getByTestId('tabs')).toBeInTheDocument()
      expect(screen.getByText('Tab 1')).toBeInTheDocument()
    })

    it('shows content for defaultValue', () => {
      renderTabs({ defaultValue: 'tab1' })
      expect(screen.getByText('Content 1')).toBeInTheDocument()
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument()
    })

    it('switches content on tab click (uncontrolled)', async () => {
      const user = userEvent.setup()
      renderTabs({ defaultValue: 'tab1' })

      await user.click(screen.getByText('Tab 2'))

      expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
      expect(screen.getByText('Content 2')).toBeInTheDocument()
    })

    it('calls onValueChange when tab is clicked', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      renderTabs({ defaultValue: 'tab1', onValueChange: handleChange })

      await user.click(screen.getByText('Tab 2'))

      expect(handleChange).toHaveBeenCalledWith('tab2')
    })

    it('works in controlled mode', () => {
      renderTabs({ value: 'tab2' })

      expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
      expect(screen.getByText('Content 2')).toBeInTheDocument()
    })

    it('has correct display name', () => {
      expect(Tabs.displayName).toBe('Tabs')
    })
  })

  describe('TabsList', () => {
    it('renders with tablist role', () => {
      renderTabs({ defaultValue: 'tab1' })
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('applies default classes', () => {
      renderTabs({ defaultValue: 'tab1' })
      const tablist = screen.getByRole('tablist')
      expect(tablist).toHaveClass('inline-flex')
      expect(tablist).toHaveClass('items-center')
    })

    it('has correct display name', () => {
      expect(TabsList.displayName).toBe('TabsList')
    })
  })

  describe('TabsTrigger', () => {
    it('renders with tab role', () => {
      renderTabs({ defaultValue: 'tab1' })
      const tabs = screen.getAllByRole('tab')
      expect(tabs).toHaveLength(3)
    })

    it('marks active tab with aria-selected', () => {
      renderTabs({ defaultValue: 'tab1' })
      const tab1 = screen.getByText('Tab 1')
      const tab2 = screen.getByText('Tab 2')

      expect(tab1).toHaveAttribute('aria-selected', 'true')
      expect(tab2).toHaveAttribute('aria-selected', 'false')
    })

    it('sets data-state attribute', () => {
      renderTabs({ defaultValue: 'tab1' })
      const tab1 = screen.getByText('Tab 1')
      const tab2 = screen.getByText('Tab 2')

      expect(tab1).toHaveAttribute('data-state', 'active')
      expect(tab2).toHaveAttribute('data-state', 'inactive')
    })

    it('applies active styling to selected tab', () => {
      renderTabs({ defaultValue: 'tab1' })
      const tab1 = screen.getByText('Tab 1')
      expect(tab1).toHaveClass('bg-white')
      expect(tab1).toHaveClass('shadow-sm')
    })

    it('has correct display name', () => {
      expect(TabsTrigger.displayName).toBe('TabsTrigger')
    })
  })

  describe('TabsContent', () => {
    it('renders with tabpanel role when active', () => {
      renderTabs({ defaultValue: 'tab1' })
      expect(screen.getByRole('tabpanel')).toBeInTheDocument()
    })

    it('does not render inactive content', () => {
      renderTabs({ defaultValue: 'tab1' })
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument()
      expect(screen.queryByText('Content 3')).not.toBeInTheDocument()
    })

    it('applies data-state attribute', () => {
      renderTabs({ defaultValue: 'tab1' })
      const panel = screen.getByRole('tabpanel')
      expect(panel).toHaveAttribute('data-state', 'active')
    })

    it('applies default classes', () => {
      renderTabs({ defaultValue: 'tab1' })
      const panel = screen.getByRole('tabpanel')
      expect(panel).toHaveClass('mt-2')
    })

    it('has correct display name', () => {
      expect(TabsContent.displayName).toBe('TabsContent')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref on Tabs root', () => {
      const ref = React.createRef<HTMLDivElement>()
      render(
        <Tabs ref={ref} defaultValue="tab1">
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('forwards ref on TabsTrigger', () => {
      const ref = React.createRef<HTMLButtonElement>()
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger ref={ref} value="tab1">Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      )
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })
})
