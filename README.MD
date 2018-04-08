# What is React-FetchContainer

React-FetchContainer is a simple render-props container component that wraps the rendering of a nested component. It supplies a render function which supplies  a loading boolean and the returned data once the fetch completes.

# How do I use it?

Simply import the package.

```js
    import FetchContainer from 'fetchcontainer';
```

Now you are ready to use it!

```js
    <FetchContainer url ="https://SOMEURLHERE/todo"
        render={({ isLoading, data }) => (
            isLoading ? 
                <div>Loading</div> : 
                <SomeComponent items={data} />
        )}
    />
```	
	
Don't want loading indicator ?

```js
    <FetchContainer url ="https://SOMEURLHERE/todo"
        render={({ isLoading, data }) => (
            isLoading && <SomeComponent items={data} />
        )}
    />
```	

That's it, more features are planned but this is the first release.
